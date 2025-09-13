import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodsCreateOrConnectWithoutPokemonMovesInput } from "../inputs/PokemonMoveMethodsCreateOrConnectWithoutPokemonMovesInput";
import { PokemonMoveMethodsCreateWithoutPokemonMovesInput } from "../inputs/PokemonMoveMethodsCreateWithoutPokemonMovesInput";
import { PokemonMoveMethodsUpdateToOneWithWhereWithoutPokemonMovesInput } from "../inputs/PokemonMoveMethodsUpdateToOneWithWhereWithoutPokemonMovesInput";
import { PokemonMoveMethodsUpsertWithoutPokemonMovesInput } from "../inputs/PokemonMoveMethodsUpsertWithoutPokemonMovesInput";
import { PokemonMoveMethodsWhereUniqueInput } from "../inputs/PokemonMoveMethodsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMoveMethodsUpdateOneRequiredWithoutPokemonMovesNestedInput", {})
export class PokemonMoveMethodsUpdateOneRequiredWithoutPokemonMovesNestedInput {
  @TypeGraphQL.Field(_type => PokemonMoveMethodsCreateWithoutPokemonMovesInput, {
    nullable: true
  })
  create?: PokemonMoveMethodsCreateWithoutPokemonMovesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsCreateOrConnectWithoutPokemonMovesInput, {
    nullable: true
  })
  connectOrCreate?: PokemonMoveMethodsCreateOrConnectWithoutPokemonMovesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsUpsertWithoutPokemonMovesInput, {
    nullable: true
  })
  upsert?: PokemonMoveMethodsUpsertWithoutPokemonMovesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonMoveMethodsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsUpdateToOneWithWhereWithoutPokemonMovesInput, {
    nullable: true
  })
  update?: PokemonMoveMethodsUpdateToOneWithWhereWithoutPokemonMovesInput | undefined;
}
