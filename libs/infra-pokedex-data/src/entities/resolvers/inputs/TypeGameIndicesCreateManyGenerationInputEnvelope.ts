import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeGameIndicesCreateManyGenerationInput } from "../inputs/TypeGameIndicesCreateManyGenerationInput";

@TypeGraphQL.InputType("TypeGameIndicesCreateManyGenerationInputEnvelope", {})
export class TypeGameIndicesCreateManyGenerationInputEnvelope {
  @TypeGraphQL.Field(_type => [TypeGameIndicesCreateManyGenerationInput], {
    nullable: false
  })
  data!: TypeGameIndicesCreateManyGenerationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
