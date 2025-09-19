import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateManyEffectInput } from "../inputs/MoveCreateManyEffectInput";

@TypeGraphQL.InputType("MoveCreateManyEffectInputEnvelope", {})
export class MoveCreateManyEffectInputEnvelope {
  @TypeGraphQL.Field(_type => [MoveCreateManyEffectInput], {
    nullable: false
  })
  data!: MoveCreateManyEffectInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
