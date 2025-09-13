import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodsScalarWhereInput", {})
export class VersionGroupPokemonMoveMethodsScalarWhereInput {
  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsScalarWhereInput], {
    nullable: true
  })
  AND?: VersionGroupPokemonMoveMethodsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsScalarWhereInput], {
    nullable: true
  })
  OR?: VersionGroupPokemonMoveMethodsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsScalarWhereInput], {
    nullable: true
  })
  NOT?: VersionGroupPokemonMoveMethodsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  version_group_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokemon_move_method_id?: IntFilter | undefined;
}
