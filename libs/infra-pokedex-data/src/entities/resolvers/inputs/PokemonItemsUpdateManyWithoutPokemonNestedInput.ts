import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemsCreateManyPokemonInputEnvelope } from "../inputs/PokemonItemsCreateManyPokemonInputEnvelope";
import { PokemonItemsCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonItemsCreateOrConnectWithoutPokemonInput";
import { PokemonItemsCreateWithoutPokemonInput } from "../inputs/PokemonItemsCreateWithoutPokemonInput";
import { PokemonItemsScalarWhereInput } from "../inputs/PokemonItemsScalarWhereInput";
import { PokemonItemsUpdateManyWithWhereWithoutPokemonInput } from "../inputs/PokemonItemsUpdateManyWithWhereWithoutPokemonInput";
import { PokemonItemsUpdateWithWhereUniqueWithoutPokemonInput } from "../inputs/PokemonItemsUpdateWithWhereUniqueWithoutPokemonInput";
import { PokemonItemsUpsertWithWhereUniqueWithoutPokemonInput } from "../inputs/PokemonItemsUpsertWithWhereUniqueWithoutPokemonInput";
import { PokemonItemsWhereUniqueInput } from "../inputs/PokemonItemsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonItemsUpdateManyWithoutPokemonNestedInput", {})
export class PokemonItemsUpdateManyWithoutPokemonNestedInput {
  @TypeGraphQL.Field(_type => [PokemonItemsCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: PokemonItemsCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: PokemonItemsCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsUpsertWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  upsert?: PokemonItemsUpsertWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonItemsCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonItemsCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonItemsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonItemsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonItemsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonItemsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsUpdateWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  update?: PokemonItemsUpdateWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsUpdateManyWithWhereWithoutPokemonInput], {
    nullable: true
  })
  updateMany?: PokemonItemsUpdateManyWithWhereWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonItemsScalarWhereInput[] | undefined;
}
