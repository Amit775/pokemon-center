import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilitiesCreateWithoutGenerationInput } from "../inputs/AbilitiesCreateWithoutGenerationInput";
import { AbilitiesWhereUniqueInput } from "../inputs/AbilitiesWhereUniqueInput";

@TypeGraphQL.InputType("AbilitiesCreateOrConnectWithoutGenerationInput", {})
export class AbilitiesCreateOrConnectWithoutGenerationInput {
  @TypeGraphQL.Field(_type => AbilitiesWhereUniqueInput, {
    nullable: false
  })
  where!: AbilitiesWhereUniqueInput;

  @TypeGraphQL.Field(_type => AbilitiesCreateWithoutGenerationInput, {
    nullable: false
  })
  create!: AbilitiesCreateWithoutGenerationInput;
}
