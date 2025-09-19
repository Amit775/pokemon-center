import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateManyContestEffectInput } from "../inputs/MoveCreateManyContestEffectInput";

@TypeGraphQL.InputType("MoveCreateManyContestEffectInputEnvelope", {})
export class MoveCreateManyContestEffectInputEnvelope {
  @TypeGraphQL.Field(_type => [MoveCreateManyContestEffectInput], {
    nullable: false
  })
  data!: MoveCreateManyContestEffectInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
