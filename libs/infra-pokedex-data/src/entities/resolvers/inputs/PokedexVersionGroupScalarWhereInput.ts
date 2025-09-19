import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("PokedexVersionGroupScalarWhereInput", {})
export class PokedexVersionGroupScalarWhereInput {
  @TypeGraphQL.Field(_type => [PokedexVersionGroupScalarWhereInput], {
    nullable: true
  })
  AND?: PokedexVersionGroupScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupScalarWhereInput], {
    nullable: true
  })
  OR?: PokedexVersionGroupScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupScalarWhereInput], {
    nullable: true
  })
  NOT?: PokedexVersionGroupScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokedex_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  version_group_id?: IntFilter | undefined;
}
