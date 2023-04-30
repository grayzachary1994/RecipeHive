//package liftoff.recipehive.models;
//
//
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.MappedSuperclass;
//import org.springframework.data.annotation.Id;
//
//@MappedSuperclass
//public abstract class AbstractEntity {
//    @Id
//    @GeneratedValue
//    private int id;
//
//    public int getId() {
//        return id;
//    }
//
//    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (o == null || getClass() != o.getClass()) return false;
//
//        AbstractEntity that = (AbstractEntity) o;
//
//        return id == that.id;
//    }
//
//    @Override
//    public int hashCode() {
//        return id;
//    }
//
//}
