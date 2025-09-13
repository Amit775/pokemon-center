import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexesScalarWhereInput } from "../inputs/PokedexesScalarWhereInput";
import { PokedexesUpdateManyMutationInput } from "../inputs/PokedexesUpdateManyMutationInput";

@TypeGraphQL.InputType("PokedexesUpdateManyWithWhereWithoutRegionInput", {})
export class PokedexesUpdateManyWithWhereWithoutRegionInput {
  @TypeGraphQL.Field(_type => PokedexesScalarWhereInput, {
    nullable: false
  })
  where!: PokedexesScalarWhereInput;

  @TypeGraphQL.Field(_type => PokedexesUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokedexesUpdateManyMutationInput;
}
