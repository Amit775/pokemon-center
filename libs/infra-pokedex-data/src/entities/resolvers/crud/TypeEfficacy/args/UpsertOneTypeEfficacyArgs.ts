import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeEfficacyCreateInput } from "../../../inputs/TypeEfficacyCreateInput";
import { TypeEfficacyUpdateInput } from "../../../inputs/TypeEfficacyUpdateInput";
import { TypeEfficacyWhereUniqueInput } from "../../../inputs/TypeEfficacyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTypeEfficacyArgs {
  @TypeGraphQL.Field(_type => TypeEfficacyWhereUniqueInput, {
    nullable: false
  })
  where!: TypeEfficacyWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeEfficacyCreateInput, {
    nullable: false
  })
  create!: TypeEfficacyCreateInput;

  @TypeGraphQL.Field(_type => TypeEfficacyUpdateInput, {
    nullable: false
  })
  update!: TypeEfficacyUpdateInput;
}
