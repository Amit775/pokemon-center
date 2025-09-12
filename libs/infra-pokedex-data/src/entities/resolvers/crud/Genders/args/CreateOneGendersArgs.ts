import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GendersCreateInput } from "../../../inputs/GendersCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneGendersArgs {
  @TypeGraphQL.Field(_type => GendersCreateInput, {
    nullable: false
  })
  data!: GendersCreateInput;
}
