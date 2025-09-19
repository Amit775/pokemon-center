import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveDamageClassOrderByWithRelationInput } from "../../../inputs/MoveDamageClassOrderByWithRelationInput";
import { MoveDamageClassWhereInput } from "../../../inputs/MoveDamageClassWhereInput";
import { MoveDamageClassWhereUniqueInput } from "../../../inputs/MoveDamageClassWhereUniqueInput";
import { MoveDamageClassScalarFieldEnum } from "../../../../enums/MoveDamageClassScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMoveDamageClassArgs {
  @TypeGraphQL.Field(_type => MoveDamageClassWhereInput, {
    nullable: true
  })
  where?: MoveDamageClassWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveDamageClassOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MoveDamageClassOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassWhereUniqueInput, {
    nullable: true
  })
  cursor?: MoveDamageClassWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MoveDamageClassScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier"> | undefined;
}
