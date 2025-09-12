import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestEffectsUpdateManyMutationInput } from "../../../inputs/SuperContestEffectsUpdateManyMutationInput";
import { SuperContestEffectsWhereInput } from "../../../inputs/SuperContestEffectsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySuperContestEffectsArgs {
  @TypeGraphQL.Field(_type => SuperContestEffectsUpdateManyMutationInput, {
    nullable: false
  })
  data!: SuperContestEffectsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SuperContestEffectsWhereInput, {
    nullable: true
  })
  where?: SuperContestEffectsWhereInput | undefined;
}
