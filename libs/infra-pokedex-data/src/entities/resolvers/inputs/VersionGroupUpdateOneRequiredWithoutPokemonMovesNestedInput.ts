import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateOrConnectWithoutPokemonMovesInput } from "../inputs/VersionGroupCreateOrConnectWithoutPokemonMovesInput";
import { VersionGroupCreateWithoutPokemonMovesInput } from "../inputs/VersionGroupCreateWithoutPokemonMovesInput";
import { VersionGroupUpdateToOneWithWhereWithoutPokemonMovesInput } from "../inputs/VersionGroupUpdateToOneWithWhereWithoutPokemonMovesInput";
import { VersionGroupUpsertWithoutPokemonMovesInput } from "../inputs/VersionGroupUpsertWithoutPokemonMovesInput";
import { VersionGroupWhereUniqueInput } from "../inputs/VersionGroupWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupUpdateOneRequiredWithoutPokemonMovesNestedInput", {})
export class VersionGroupUpdateOneRequiredWithoutPokemonMovesNestedInput {
  @TypeGraphQL.Field(_type => VersionGroupCreateWithoutPokemonMovesInput, {
    nullable: true
  })
  create?: VersionGroupCreateWithoutPokemonMovesInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupCreateOrConnectWithoutPokemonMovesInput, {
    nullable: true
  })
  connectOrCreate?: VersionGroupCreateOrConnectWithoutPokemonMovesInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupUpsertWithoutPokemonMovesInput, {
    nullable: true
  })
  upsert?: VersionGroupUpsertWithoutPokemonMovesInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionGroupWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupUpdateToOneWithWhereWithoutPokemonMovesInput, {
    nullable: true
  })
  update?: VersionGroupUpdateToOneWithWhereWithoutPokemonMovesInput | undefined;
}
