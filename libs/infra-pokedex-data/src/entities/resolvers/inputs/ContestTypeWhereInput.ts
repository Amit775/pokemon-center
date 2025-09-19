import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorListRelationFilter } from "../inputs/BerryFlavorListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MoveListRelationFilter } from "../inputs/MoveListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ContestTypeWhereInput", {})
export class ContestTypeWhereInput {
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

  @TypeGraphQL.Field(_type => BerryFlavorListRelationFilter, {
    nullable: true
  })
  berryFlavors?: BerryFlavorListRelationFilter | undefined;
}
