import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestCombosCreateManyFirstMoveInput } from "../inputs/SuperContestCombosCreateManyFirstMoveInput";

@TypeGraphQL.InputType("SuperContestCombosCreateManyFirstMoveInputEnvelope", {})
export class SuperContestCombosCreateManyFirstMoveInputEnvelope {
  @TypeGraphQL.Field(_type => [SuperContestCombosCreateManyFirstMoveInput], {
    nullable: false
  })
  data!: SuperContestCombosCreateManyFirstMoveInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
