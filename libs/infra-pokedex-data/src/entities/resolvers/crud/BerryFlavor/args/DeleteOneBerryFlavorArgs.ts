import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryFlavorWhereUniqueInput } from "../../../inputs/BerryFlavorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneBerryFlavorArgs {
  @TypeGraphQL.Field(_type => BerryFlavorWhereUniqueInput, {
    nullable: false
  })
  where!: BerryFlavorWhereUniqueInput;
}
