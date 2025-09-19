import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryFlavorCreateInput } from "../../../inputs/BerryFlavorCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneBerryFlavorArgs {
  @TypeGraphQL.Field(_type => BerryFlavorCreateInput, {
    nullable: false
  })
  data!: BerryFlavorCreateInput;
}
