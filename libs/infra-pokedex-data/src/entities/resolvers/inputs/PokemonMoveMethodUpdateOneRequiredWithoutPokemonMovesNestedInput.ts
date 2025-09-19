import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodCreateOrConnectWithoutPokemonMovesInput } from "../inputs/PokemonMoveMethodCreateOrConnectWithoutPokemonMovesInput";
import { PokemonMoveMethodCreateWithoutPokemonMovesInput } from "../inputs/PokemonMoveMethodCreateWithoutPokemonMovesInput";
import { PokemonMoveMethodUpdateToOneWithWhereWithoutPokemonMovesInput } from "../inputs/PokemonMoveMethodUpdateToOneWithWhereWithoutPokemonMovesInput";
import { PokemonMoveMethodUpsertWithoutPokemonMovesInput } from "../inputs/PokemonMoveMethodUpsertWithoutPokemonMovesInput";
import { PokemonMoveMethodWhereUniqueInput } from "../inputs/PokemonMoveMethodWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMoveMethodUpdateOneRequiredWithoutPokemonMovesNestedInput", {})
export class PokemonMoveMethodUpdateOneRequiredWithoutPokemonMovesNestedInput {
  @TypeGraphQL.Field(_type => PokemonMoveMethodCreateWithoutPokemonMovesInput, {
    nullable: true
  })
  create?: PokemonMoveMethodCreateWithoutPokemonMovesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodCreateOrConnectWithoutPokemonMovesInput, {
    nullable: true
  })
  connectOrCreate?: PokemonMoveMethodCreateOrConnectWithoutPokemonMovesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodUpsertWithoutPokemonMovesInput, {
    nullable: true
  })
  upsert?: PokemonMoveMethodUpsertWithoutPokemonMovesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonMoveMethodWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodUpdateToOneWithWhereWithoutPokemonMovesInput, {
    nullable: true
  })
  update?: PokemonMoveMethodUpdateToOneWithWhereWithoutPokemonMovesInput | undefined;
}
