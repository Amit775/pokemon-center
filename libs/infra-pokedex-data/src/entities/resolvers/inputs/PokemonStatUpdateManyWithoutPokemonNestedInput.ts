import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonStatCreateManyPokemonInputEnvelope } from "../inputs/PokemonStatCreateManyPokemonInputEnvelope";
import { PokemonStatCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonStatCreateOrConnectWithoutPokemonInput";
import { PokemonStatCreateWithoutPokemonInput } from "../inputs/PokemonStatCreateWithoutPokemonInput";
import { PokemonStatScalarWhereInput } from "../inputs/PokemonStatScalarWhereInput";
import { PokemonStatUpdateManyWithWhereWithoutPokemonInput } from "../inputs/PokemonStatUpdateManyWithWhereWithoutPokemonInput";
import { PokemonStatUpdateWithWhereUniqueWithoutPokemonInput } from "../inputs/PokemonStatUpdateWithWhereUniqueWithoutPokemonInput";
import { PokemonStatUpsertWithWhereUniqueWithoutPokemonInput } from "../inputs/PokemonStatUpsertWithWhereUniqueWithoutPokemonInput";
import { PokemonStatWhereUniqueInput } from "../inputs/PokemonStatWhereUniqueInput";

@TypeGraphQL.InputType("PokemonStatUpdateManyWithoutPokemonNestedInput", {})
export class PokemonStatUpdateManyWithoutPokemonNestedInput {
  @TypeGraphQL.Field(_type => [PokemonStatCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: PokemonStatCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: PokemonStatCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatUpsertWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  upsert?: PokemonStatUpsertWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonStatCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonStatCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonStatWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonStatWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonStatWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonStatWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatUpdateWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  update?: PokemonStatUpdateWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatUpdateManyWithWhereWithoutPokemonInput], {
    nullable: true
  })
  updateMany?: PokemonStatUpdateManyWithWhereWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonStatScalarWhereInput[] | undefined;
}
