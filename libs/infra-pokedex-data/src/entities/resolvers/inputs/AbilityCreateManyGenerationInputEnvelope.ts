import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilityCreateManyGenerationInput } from "../inputs/AbilityCreateManyGenerationInput";

@TypeGraphQL.InputType("AbilityCreateManyGenerationInputEnvelope", {})
export class AbilityCreateManyGenerationInputEnvelope {
  @TypeGraphQL.Field(_type => [AbilityCreateManyGenerationInput], {
    nullable: false
  })
  data!: AbilityCreateManyGenerationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
