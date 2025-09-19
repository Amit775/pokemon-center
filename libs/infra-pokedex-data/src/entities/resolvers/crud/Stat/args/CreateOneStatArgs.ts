import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatCreateInput } from "../../../inputs/StatCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneStatArgs {
  @TypeGraphQL.Field(_type => StatCreateInput, {
    nullable: false
  })
  data!: StatCreateInput;
}
