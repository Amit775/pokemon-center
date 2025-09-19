import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { MoveListRelationFilter } from "../inputs/MoveListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TypeListRelationFilter } from "../inputs/TypeListRelationFilter";

@TypeGraphQL.InputType("MoveDamageClassWhereInput", {})
export class MoveDamageClassWhereInput {
  @TypeGraphQL.Field(_type => [MoveDamageClassWhereInput], {
    nullable: true
  })
  AND?: MoveDamageClassWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveDamageClassWhereInput], {
    nullable: true
  })
  OR?: MoveDamageClassWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveDamageClassWhereInput], {
    nullable: true
  })
  NOT?: MoveDamageClassWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => MoveListRelationFilter, {
    nullable: true
  })
  moves?: MoveListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TypeListRelationFilter, {
    nullable: true
  })
  types?: TypeListRelationFilter | undefined;
}
