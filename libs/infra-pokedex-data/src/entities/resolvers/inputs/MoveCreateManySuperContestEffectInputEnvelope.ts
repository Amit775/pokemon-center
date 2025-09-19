import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateManySuperContestEffectInput } from "../inputs/MoveCreateManySuperContestEffectInput";

@TypeGraphQL.InputType("MoveCreateManySuperContestEffectInputEnvelope", {})
export class MoveCreateManySuperContestEffectInputEnvelope {
  @TypeGraphQL.Field(_type => [MoveCreateManySuperContestEffectInput], {
    nullable: false
  })
  data!: MoveCreateManySuperContestEffectInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
