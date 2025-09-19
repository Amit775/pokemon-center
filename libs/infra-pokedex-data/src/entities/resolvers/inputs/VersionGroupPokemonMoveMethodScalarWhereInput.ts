import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodScalarWhereInput", {})
export class VersionGroupPokemonMoveMethodScalarWhereInput {
  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodScalarWhereInput], {
    nullable: true
  })
  AND?: VersionGroupPokemonMoveMethodScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodScalarWhereInput], {
    nullable: true
  })
  OR?: VersionGroupPokemonMoveMethodScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodScalarWhereInput], {
    nullable: true
  })
  NOT?: VersionGroupPokemonMoveMethodScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  version_group_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokemon_move_method_id?: IntFilter | undefined;
}
