import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupScalarWhereInput } from "../inputs/PokedexVersionGroupScalarWhereInput";
import { PokedexVersionGroupUpdateManyMutationInput } from "../inputs/PokedexVersionGroupUpdateManyMutationInput";

@TypeGraphQL.InputType("PokedexVersionGroupUpdateManyWithWhereWithoutVersionGroupInput", {})
export class PokedexVersionGroupUpdateManyWithWhereWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => PokedexVersionGroupScalarWhereInput, {
    nullable: false
  })
  where!: PokedexVersionGroupScalarWhereInput;

  @TypeGraphQL.Field(_type => PokedexVersionGroupUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokedexVersionGroupUpdateManyMutationInput;
}
