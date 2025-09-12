import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeEfficacyCreateInput } from "../../../inputs/TypeEfficacyCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTypeEfficacyArgs {
  @TypeGraphQL.Field(_type => TypeEfficacyCreateInput, {
    nullable: false
  })
  data!: TypeEfficacyCreateInput;
}
