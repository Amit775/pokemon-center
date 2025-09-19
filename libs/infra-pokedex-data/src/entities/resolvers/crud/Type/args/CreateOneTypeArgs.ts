import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeCreateInput } from "../../../inputs/TypeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTypeArgs {
  @TypeGraphQL.Field(_type => TypeCreateInput, {
    nullable: false
  })
  data!: TypeCreateInput;
}
