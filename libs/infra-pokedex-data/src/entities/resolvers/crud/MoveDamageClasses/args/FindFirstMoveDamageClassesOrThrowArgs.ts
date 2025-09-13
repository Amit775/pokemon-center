import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveDamageClassesOrderByWithRelationInput } from "../../../inputs/MoveDamageClassesOrderByWithRelationInput";
import { MoveDamageClassesWhereInput } from "../../../inputs/MoveDamageClassesWhereInput";
import { MoveDamageClassesWhereUniqueInput } from "../../../inputs/MoveDamageClassesWhereUniqueInput";
import { MoveDamageClassesScalarFieldEnum } from "../../../../enums/MoveDamageClassesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMoveDamageClassesOrThrowArgs {
  @TypeGraphQL.Field(_type => MoveDamageClassesWhereInput, {
    nullable: true
  })
  where?: MoveDamageClassesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveDamageClassesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MoveDamageClassesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassesWhereUniqueInput, {
    nullable: true
  })
  cursor?: MoveDamageClassesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MoveDamageClassesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier"> | undefined;
}
