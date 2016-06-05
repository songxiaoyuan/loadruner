import java.io.File;
import java.io.IOException;
import java.util.logging.FileHandler;
import java.util.logging.Level;
import java.util.logging.Logger;


public class MyLogger {
	private static final Logger log = Logger.getLogger("dwl.backend");
	private MyLogger(){}
	static
	{
		try {
			File file = new File(System.getProperty("user.home") + File.separator + "DWL.log");
			if (!file.isFile()) {
				file.createNewFile();
			}
			else{
				file.setLastModified(System.currentTimeMillis());
			}
			FileHandler fileHandler = new FileHandler(System.getProperty("user.home") + File.separator + "DWL.log");
			fileHandler.setLevel(Level.INFO);
			log.addHandler(fileHandler);
		} catch (SecurityException | IOException e) {
			e.printStackTrace();
		}
	}

	public static Logger getInstance(){
		return log;
	}
}