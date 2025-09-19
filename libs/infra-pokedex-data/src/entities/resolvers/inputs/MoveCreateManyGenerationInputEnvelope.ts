import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateManyGenerationInput } from "../inputs/MoveCreateManyGenerationInput";

@TypeGraphQL.InputType("MoveCreateManyGenerationInputEnvelope", {})
export class MoveCreateManyGenerationInputEnvelope {
  @TypeGraphQL.Field(_type => [MoveCreateManyGenerationInput], {
    nullable: false
  })
  data!: MoveCreateManyGenerationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
