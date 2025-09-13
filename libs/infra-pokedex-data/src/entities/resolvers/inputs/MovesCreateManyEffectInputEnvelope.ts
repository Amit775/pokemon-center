import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateManyEffectInput } from "../inputs/MovesCreateManyEffectInput";

@TypeGraphQL.InputType("MovesCreateManyEffectInputEnvelope", {})
export class MovesCreateManyEffectInputEnvelope {
  @TypeGraphQL.Field(_type => [MovesCreateManyEffectInput], {
    nullable: false
  })
  data!: MovesCreateManyEffectInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
