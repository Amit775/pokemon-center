import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormsCreateManyPokemonInputEnvelope } from "../inputs/PokemonFormsCreateManyPokemonInputEnvelope";
import { PokemonFormsCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonFormsCreateOrConnectWithoutPokemonInput";
import { PokemonFormsCreateWithoutPokemonInput } from "../inputs/PokemonFormsCreateWithoutPokemonInput";
import { PokemonFormsScalarWhereInput } from "../inputs/PokemonFormsScalarWhereInput";
import { PokemonFormsUpdateManyWithWhereWithoutPokemonInput } from "../inputs/PokemonFormsUpdateManyWithWhereWithoutPokemonInput";
import { PokemonFormsUpdateWithWhereUniqueWithoutPokemonInput } from "../inputs/PokemonFormsUpdateWithWhereUniqueWithoutPokemonInput";
import { PokemonFormsUpsertWithWhereUniqueWithoutPokemonInput } from "../inputs/PokemonFormsUpsertWithWhereUniqueWithoutPokemonInput";
import { PokemonFormsWhereUniqueInput } from "../inputs/PokemonFormsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormsUpdateManyWithoutPokemonNestedInput", {})
export class PokemonFormsUpdateManyWithoutPokemonNestedInput {
  @TypeGraphQL.Field(_type => [PokemonFormsCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: PokemonFormsCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormsCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: PokemonFormsCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormsUpsertWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  upsert?: PokemonFormsUpsertWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonFormsCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormsWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonFormsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonFormsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormsWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonFormsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormsWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonFormsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormsUpdateWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  update?: PokemonFormsUpdateWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormsUpdateManyWithWhereWithoutPokemonInput], {
    nullable: true
  })
  updateMany?: PokemonFormsUpdateManyWithWhereWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonFormsScalarWhereInput[] | undefined;
}
