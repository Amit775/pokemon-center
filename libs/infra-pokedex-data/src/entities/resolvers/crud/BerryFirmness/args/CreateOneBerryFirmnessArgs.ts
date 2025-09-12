import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryFirmnessCreateInput } from "../../../inputs/BerryFirmnessCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneBerryFirmnessArgs {
  @TypeGraphQL.Field(_type => BerryFirmnessCreateInput, {
    nullable: false
  })
  data!: BerryFirmnessCreateInput;
}
