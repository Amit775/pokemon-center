import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateManyContestEffectInput } from "../inputs/MovesCreateManyContestEffectInput";

@TypeGraphQL.InputType("MovesCreateManyContestEffectInputEnvelope", {})
export class MovesCreateManyContestEffectInputEnvelope {
  @TypeGraphQL.Field(_type => [MovesCreateManyContestEffectInput], {
    nullable: false
  })
  data!: MovesCreateManyContestEffectInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
