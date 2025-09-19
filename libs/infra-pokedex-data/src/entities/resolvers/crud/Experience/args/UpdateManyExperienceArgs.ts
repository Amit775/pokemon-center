import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExperienceUpdateManyMutationInput } from "../../../inputs/ExperienceUpdateManyMutationInput";
import { ExperienceWhereInput } from "../../../inputs/ExperienceWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyExperienceArgs {
  @TypeGraphQL.Field(_type => ExperienceUpdateManyMutationInput, {
    nullable: false
  })
  data!: ExperienceUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ExperienceWhereInput, {
    nullable: true
  })
  where?: ExperienceWhereInput | undefined;
}
