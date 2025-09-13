import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("PokedexVersionGroupsScalarWhereInput", {})
export class PokedexVersionGroupsScalarWhereInput {
  @TypeGraphQL.Field(_type => [PokedexVersionGroupsScalarWhereInput], {
    nullable: true
  })
  AND?: PokedexVersionGroupsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupsScalarWhereInput], {
    nullable: true
  })
  OR?: PokedexVersionGroupsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupsScalarWhereInput], {
    nullable: true
  })
  NOT?: PokedexVersionGroupsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokedex_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  version_group_id?: IntFilter | undefined;
}
