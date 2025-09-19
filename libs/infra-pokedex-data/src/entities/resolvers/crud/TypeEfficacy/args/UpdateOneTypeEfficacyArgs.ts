import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeEfficacyUpdateInput } from "../../../inputs/TypeEfficacyUpdateInput";
import { TypeEfficacyWhereUniqueInput } from "../../../inputs/TypeEfficacyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTypeEfficacyArgs {
  @TypeGraphQL.Field(_type => TypeEfficacyUpdateInput, {
    nullable: false
  })
  data!: TypeEfficacyUpdateInput;

  @TypeGraphQL.Field(_type => TypeEfficacyWhereUniqueInput, {
    nullable: false
  })
  where!: TypeEfficacyWhereUniqueInput;
}
