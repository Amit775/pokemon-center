import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerriesCreateInput } from "../../../inputs/BerriesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneBerriesArgs {
  @TypeGraphQL.Field(_type => BerriesCreateInput, {
    nullable: false
  })
  data!: BerriesCreateInput;
}
