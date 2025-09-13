import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeEfficacyOrderByWithRelationInput } from "../../../inputs/TypeEfficacyOrderByWithRelationInput";
import { TypeEfficacyWhereInput } from "../../../inputs/TypeEfficacyWhereInput";
import { TypeEfficacyWhereUniqueInput } from "../../../inputs/TypeEfficacyWhereUniqueInput";
import { TypeEfficacyScalarFieldEnum } from "../../../../enums/TypeEfficacyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstTypeEfficacyOrThrowArgs {
  @TypeGraphQL.Field(_type => TypeEfficacyWhereInput, {
    nullable: true
  })
  where?: TypeEfficacyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TypeEfficacyOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TypeEfficacyOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TypeEfficacyWhereUniqueInput, {
    nullable: true
  })
  cursor?: TypeEfficacyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TypeEfficacyScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"damage_type_id" | "target_type_id" | "damage_factor"> | undefined;
}
