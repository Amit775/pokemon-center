import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateManySuperContestEffectInput } from "../inputs/MovesCreateManySuperContestEffectInput";

@TypeGraphQL.InputType("MovesCreateManySuperContestEffectInputEnvelope", {})
export class MovesCreateManySuperContestEffectInputEnvelope {
  @TypeGraphQL.Field(_type => [MovesCreateManySuperContestEffectInput], {
    nullable: false
  })
  data!: MovesCreateManySuperContestEffectInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
