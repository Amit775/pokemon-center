import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorListRelationFilter } from "../inputs/BerryFlavorListRelationFilter";
import { ContestTypeWhereInput } from "../inputs/ContestTypeWhereInput";
import { MoveListRelationFilter } from "../inputs/MoveListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ContestTypeWhereUniqueInput", {})
export class ContestTypeWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [ContestTypeWhereInput], {
    nullable: true
  })
  AND?: ContestTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestTypeWhereInput], {
    nullable: true
  })
  OR?: ContestTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestTypeWhereInput], {
    nullable: true
  })
  NOT?: ContestTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => MoveListRelationFilter, {
    nullable: true
  })
  moves?: MoveListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorListRelationFilter, {
    nullable: true
  })
  berryFlavors?: BerryFlavorListRelationFilter | undefined;
}
