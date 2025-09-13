import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypesOrderByWithRelationInput } from "../../../inputs/TypesOrderByWithRelationInput";
import { TypesWhereInput } from "../../../inputs/TypesWhereInput";
import { TypesWhereUniqueInput } from "../../../inputs/TypesWhereUniqueInput";
import { TypesScalarFieldEnum } from "../../../../enums/TypesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyTypesArgs {
  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  where?: TypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TypesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TypesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: true
  })
  cursor?: TypesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TypesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier" | "generation_id" | "damage_class_id"> | undefined;
}
