import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemsCreateManyItemInputEnvelope } from "../inputs/PokemonItemsCreateManyItemInputEnvelope";
import { PokemonItemsCreateOrConnectWithoutItemInput } from "../inputs/PokemonItemsCreateOrConnectWithoutItemInput";
import { PokemonItemsCreateWithoutItemInput } from "../inputs/PokemonItemsCreateWithoutItemInput";
import { PokemonItemsWhereUniqueInput } from "../inputs/PokemonItemsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonItemsCreateNestedManyWithoutItemInput", {})
export class PokemonItemsCreateNestedManyWithoutItemInput {
  @TypeGraphQL.Field(_type => [PokemonItemsCreateWithoutItemInput], {
    nullable: true
  })
  create?: PokemonItemsCreateWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsCreateOrConnectWithoutItemInput], {
    nullable: true
  })
  connectOrCreate?: PokemonItemsCreateOrConnectWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonItemsCreateManyItemInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonItemsCreateManyItemInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonItemsWhereUniqueInput[] | undefined;
}
