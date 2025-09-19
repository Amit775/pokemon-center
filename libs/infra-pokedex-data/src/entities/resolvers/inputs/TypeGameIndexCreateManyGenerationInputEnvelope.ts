import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeGameIndexCreateManyGenerationInput } from "../inputs/TypeGameIndexCreateManyGenerationInput";

@TypeGraphQL.InputType("TypeGameIndexCreateManyGenerationInputEnvelope", {})
export class TypeGameIndexCreateManyGenerationInputEnvelope {
  @TypeGraphQL.Field(_type => [TypeGameIndexCreateManyGenerationInput], {
    nullable: false
  })
  data!: TypeGameIndexCreateManyGenerationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
