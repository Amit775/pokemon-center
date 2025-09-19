import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveCreateManyPokemonInputEnvelope } from "../inputs/PokemonMoveCreateManyPokemonInputEnvelope";
import { PokemonMoveCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonMoveCreateOrConnectWithoutPokemonInput";
import { PokemonMoveCreateWithoutPokemonInput } from "../inputs/PokemonMoveCreateWithoutPokemonInput";
import { PokemonMoveScalarWhereInput } from "../inputs/PokemonMoveScalarWhereInput";
import { PokemonMoveUpdateManyWithWhereWithoutPokemonInput } from "../inputs/PokemonMoveUpdateManyWithWhereWithoutPokemonInput";
import { PokemonMoveUpdateWithWhereUniqueWithoutPokemonInput } from "../inputs/PokemonMoveUpdateWithWhereUniqueWithoutPokemonInput";
import { PokemonMoveUpsertWithWhereUniqueWithoutPokemonInput } from "../inputs/PokemonMoveUpsertWithWhereUniqueWithoutPokemonInput";
import { PokemonMoveWhereUniqueInput } from "../inputs/PokemonMoveWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMoveUpdateManyWithoutPokemonNestedInput", {})
export class PokemonMoveUpdateManyWithoutPokemonNestedInput {
  @TypeGraphQL.Field(_type => [PokemonMoveCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: PokemonMoveCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: PokemonMoveCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveUpsertWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  upsert?: PokemonMoveUpsertWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonMoveCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonMoveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonMoveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonMoveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonMoveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveUpdateWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  update?: PokemonMoveUpdateWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveUpdateManyWithWhereWithoutPokemonInput], {
    nullable: true
  })
  updateMany?: PokemonMoveUpdateManyWithWhereWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonMoveScalarWhereInput[] | undefined;
}
