import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilityUpdateWithoutGenerationInput } from "../inputs/AbilityUpdateWithoutGenerationInput";
import { AbilityWhereUniqueInput } from "../inputs/AbilityWhereUniqueInput";

@TypeGraphQL.InputType("AbilityUpdateWithWhereUniqueWithoutGenerationInput", {})
export class AbilityUpdateWithWhereUniqueWithoutGenerationInput {
  @TypeGraphQL.Field(_type => AbilityWhereUniqueInput, {
    nullable: false
  })
  where!: AbilityWhereUniqueInput;

  @TypeGraphQL.Field(_type => AbilityUpdateWithoutGenerationInput, {
    nullable: false
  })
  data!: AbilityUpdateWithoutGenerationInput;
}
