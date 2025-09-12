import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncountersCreateInput } from "../../../inputs/EncountersCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEncountersArgs {
  @TypeGraphQL.Field(_type => EncountersCreateInput, {
    nullable: false
  })
  data!: EncountersCreateInput;
}
