import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateOrConnectWithoutPokemonMovesInput } from "../inputs/MoveCreateOrConnectWithoutPokemonMovesInput";
import { MoveCreateWithoutPokemonMovesInput } from "../inputs/MoveCreateWithoutPokemonMovesInput";
import { MoveUpdateToOneWithWhereWithoutPokemonMovesInput } from "../inputs/MoveUpdateToOneWithWhereWithoutPokemonMovesInput";
import { MoveUpsertWithoutPokemonMovesInput } from "../inputs/MoveUpsertWithoutPokemonMovesInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveUpdateOneRequiredWithoutPokemonMovesNestedInput", {})
export class MoveUpdateOneRequiredWithoutPokemonMovesNestedInput {
  @TypeGraphQL.Field(_type => MoveCreateWithoutPokemonMovesInput, {
    nullable: true
  })
  create?: MoveCreateWithoutPokemonMovesInput | undefined;

  @TypeGraphQL.Field(_type => MoveCreateOrConnectWithoutPokemonMovesInput, {
    nullable: true
  })
  connectOrCreate?: MoveCreateOrConnectWithoutPokemonMovesInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpsertWithoutPokemonMovesInput, {
    nullable: true
  })
  upsert?: MoveUpsertWithoutPokemonMovesInput | undefined;

  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpdateToOneWithWhereWithoutPokemonMovesInput, {
    nullable: true
  })
  update?: MoveUpdateToOneWithWhereWithoutPokemonMovesInput | undefined;
}
