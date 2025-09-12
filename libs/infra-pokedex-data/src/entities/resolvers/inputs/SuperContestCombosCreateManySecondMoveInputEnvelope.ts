import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestCombosCreateManySecondMoveInput } from "../inputs/SuperContestCombosCreateManySecondMoveInput";

@TypeGraphQL.InputType("SuperContestCombosCreateManySecondMoveInputEnvelope", {})
export class SuperContestCombosCreateManySecondMoveInputEnvelope {
  @TypeGraphQL.Field(_type => [SuperContestCombosCreateManySecondMoveInput], {
    nullable: false
  })
  data!: SuperContestCombosCreateManySecondMoveInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
