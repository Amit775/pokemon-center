import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncountersUpdateManyMutationInput } from "../../../inputs/EncountersUpdateManyMutationInput";
import { EncountersWhereInput } from "../../../inputs/EncountersWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEncountersArgs {
  @TypeGraphQL.Field(_type => EncountersUpdateManyMutationInput, {
    nullable: false
  })
  data!: EncountersUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EncountersWhereInput, {
    nullable: true
  })
  where?: EncountersWhereInput | undefined;
}
