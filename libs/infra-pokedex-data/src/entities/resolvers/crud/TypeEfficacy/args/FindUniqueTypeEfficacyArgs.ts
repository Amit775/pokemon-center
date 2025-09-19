import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeEfficacyWhereUniqueInput } from "../../../inputs/TypeEfficacyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTypeEfficacyArgs {
  @TypeGraphQL.Field(_type => TypeEfficacyWhereUniqueInput, {
    nullable: false
  })
  where!: TypeEfficacyWhereUniqueInput;
}
